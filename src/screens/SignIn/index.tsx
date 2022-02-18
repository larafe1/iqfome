import React from 'react';

import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Underline, InputForm, Button } from '@/components';
import { useAuth } from '@/hooks';
import { FormData } from '@/types';

import * as S from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail é um campo obrigatório'),
  password: Yup.string()
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .required('Senha é um campo obrigatório')
});

export function SignIn() {
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const handleSignIn = async ({ email, password }: FormData) => {
    try {
      await signIn({ email, password });
    } catch (err) {
      console.error(err);
    } finally {
      reset();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Wrapper>
        <S.Header>
          <S.BackgroundWrapper
            source={require('@/assets/signin-bg.png')}
            resizeMode="cover"
          >
            <S.Greetings>Bem-vindo(a) ao</S.Greetings>
            <S.TitleWrapper>
              <S.Title>iqfome</S.Title>
              <Underline
                width="35%"
                height="3px"
                marginTop="20px"
                color="shape"
              />
              <S.Subtitle>Seus restaurantes prediletos!</S.Subtitle>
            </S.TitleWrapper>
            <S.SignInTitle>Faça seu login</S.SignInTitle>
          </S.BackgroundWrapper>
        </S.Header>

        <S.Footer>
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
          <Button title="Entrar" onPress={handleSubmit(handleSignIn)} />
          <S.SignUpButton>
            <S.SignUpText>ou crie sua conta</S.SignUpText>
          </S.SignUpButton>
        </S.Footer>
      </S.Wrapper>
    </TouchableWithoutFeedback>
  );
}
