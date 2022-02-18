import React from 'react';

import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Underline, InputForm, Button } from '@/components';
import { useAuth } from '@/hooks';
import { SignUpFormData } from '@/types';
import { Icons } from '@/utils';

import * as S from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é um campo obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail é um campo obrigatório'),
  password: Yup.string()
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .required('Senha é um campo obrigatório'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Senhas não conferem'
  )
});

export function SignUp() {
  const { signUp } = useAuth();

  const { goBack } = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const handleGoBack = () => {
    goBack();
  };

  const handleSignUp = async ({
    name,
    email,
    password,
    confirmPassword
  }: SignUpFormData) => {
    try {
      if (password !== confirmPassword)
        throw new Error('Tentativa de envio de senhas que não conferem');
      await signUp({ name, email, password });
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Wrapper>
        <StatusBar style="dark" />
        <S.Header>
          <S.GoBackButton onPress={handleGoBack}>
            <S.Icon name={Icons.BACK} />
          </S.GoBackButton>

          <S.TitleWrapper>
            <S.Title>Cadastro de conta</S.Title>
            <Underline
              width="65%"
              height="3px"
              marginTop="12px"
              color="primary"
            />
          </S.TitleWrapper>
        </S.Header>
        <S.FormWrapper>
          <S.InputWrapper>
            <S.InputLabel>Nome</S.InputLabel>
            <InputForm
              autoCapitalize="words"
              name="name"
              control={control}
              error={errors.name && errors.name.message}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputLabel>E-mail</S.InputLabel>
            <InputForm
              name="email"
              control={control}
              error={errors.email && errors.email.message}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputLabel>Senha</S.InputLabel>
            <InputForm
              isPasswordField
              name="password"
              control={control}
              error={errors.password && errors.password.message}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputLabel>Confirmar senha</S.InputLabel>
            <InputForm
              isPasswordField
              name="confirmPassword"
              control={control}
              error={errors.confirmPassword && errors.confirmPassword.message}
            />
          </S.InputWrapper>
          <Button title="Cadastrar" onPress={handleSubmit(handleSignUp)} />
        </S.FormWrapper>
      </S.Wrapper>
    </TouchableWithoutFeedback>
  );
}
