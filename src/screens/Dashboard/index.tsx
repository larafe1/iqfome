import React, { useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';

import { Input, Underline, ItemsList } from '@/components';
import { useRestaurants, useAuth } from '@/hooks';
import { SearchResults, Sections } from '@/types';
import { parseGreetings, Icons } from '@/utils';

import * as S from './styles';

export function Dashboard() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([] as SearchResults);
  const [isARestaurant, setIsARestaurant] = useState(true);

  const { isLoading: isUserLoading, user, signOut } = useAuth();
  const {
    isLoading: isRestaurantsLoading,
    restaurants,
    dishes,
    getRestaurants,
    // getRestaurantById,
    getDishes
  } = useRestaurants();

  const handleSelectSection = (sectionName: Sections) => {
    setSearch('');
    setSearchResults([] as SearchResults);

    sectionName === 'restaurants'
      ? setIsARestaurant(true)
      : setIsARestaurant(false);
  };

  const handleSearch = () => {
    if (!search) return;

    const filteredRestaurantIdByName = restaurants.filter(
      (restaurant) => restaurant.name.includes(search) && restaurant.id
    );
    const filteredRestaurantIdByDish = dishes.filter(
      (dish) =>
        dish.name.includes(search) ||
        (dish.description.includes(search) && dish.restaurant_id)
    );

    if (filteredRestaurantIdByName.length) {
      setIsARestaurant(true);
      setSearchResults(filteredRestaurantIdByName);
    } else if (filteredRestaurantIdByDish.length) {
      setIsARestaurant(false);
      setSearchResults(filteredRestaurantIdByDish);
    }
  };

  // const handleGetRestaurantById = async (id: string) => {
  //   await getRestaurantById(id);
  // };

  useEffect(() => {
    getRestaurants();
    getDishes();
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      {isUserLoading || isRestaurantsLoading ? (
        <S.Loading />
      ) : (
        <S.Wrapper>
          <S.Header>
            <S.UserWrapper>
              <S.Greetings>{parseGreetings(user.name)}</S.Greetings>
              <S.SignOutButton onPress={signOut}>
                <S.SignOutIcon name={Icons.EXIT} />
                <S.SignOutText>Sair</S.SignOutText>
              </S.SignOutButton>
            </S.UserWrapper>
            <S.QuestionTitle>O que vamos comer hoje?</S.QuestionTitle>
            <S.SearchWrapper>
              <S.SearchButton onPress={handleSearch}>
                <S.SearchIcon name={Icons.SEARCH} />
              </S.SearchButton>
              <Input
                width="80%"
                paddingYX={['12px', '0']}
                placeholder="Pesquisar"
                value={search}
                onChangeText={setSearch}
              />
            </S.SearchWrapper>
          </S.Header>

          <S.Body>
            <S.BodyTitleWrapper>
              <S.SectionButton
                onPress={() => handleSelectSection('restaurants')}
              >
                <S.RestaurantsTitleWrapper>
                  <S.SectionTitle isActive={isARestaurant}>
                    Restaurantes
                  </S.SectionTitle>
                  <Underline
                    width="100%"
                    height="3px"
                    marginTop="8px"
                    color={isARestaurant ? 'primary' : 'border'}
                  />
                </S.RestaurantsTitleWrapper>
              </S.SectionButton>
              <S.SectionButton onPress={() => handleSelectSection('dishes')}>
                <S.DishesTitleWrapper>
                  <S.SectionTitle isActive={!isARestaurant}>
                    Pratos
                  </S.SectionTitle>
                  <Underline
                    width="100%"
                    height="3px"
                    marginTop="8px"
                    color={isARestaurant ? 'border' : 'primary'}
                  />
                </S.DishesTitleWrapper>
              </S.SectionButton>
            </S.BodyTitleWrapper>

            <S.BodyContentWrapper>
              {isARestaurant ? (
                <ItemsList
                  data={searchResults.length ? searchResults : restaurants}
                  isARestaurant
                />
              ) : (
                <ItemsList
                  data={searchResults.length ? searchResults : dishes}
                />
              )}
            </S.BodyContentWrapper>
          </S.Body>
        </S.Wrapper>
      )}
    </>
  );
}
