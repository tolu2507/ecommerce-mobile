import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";

export const DashboardHeader = () => {
  const navigation = useNavigation();

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => navigation.navigate("Cart");
  return (
    <Appbar.Header>
      <Appbar.Content title="BuyNow" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="briefcase" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export const CartHeader = () => {
  const navigation = useNavigation();

  const _goBack = () => navigation.goBack();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Cart" />
    </Appbar.Header>
  );
};

export const DetailHeader = () => {
  const navigation = useNavigation();

  const _goBack = () => navigation.goBack();
  const _handleMore = () => navigation.navigate("Cart");
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="" />
      <Appbar.Action icon="heart-outline" onPress={_handleMore} />
    </Appbar.Header>
  );
};
