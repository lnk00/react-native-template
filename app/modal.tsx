import { View, Text } from 'react-native';

import { useGetUsers } from '../queries/user';

export default function ModalScreen() {
  const {
    data: users,
    isLoading: isUsersLoading,
    isError: isUsersError,
  } = useGetUsers();

  if (isUsersLoading) {
    return <Text>Loading...</Text>;
  }

  if (isUsersError) {
    return <Text>Error fetching user</Text>;
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-4xl font-bold">Modal</Text>
      {users && users?.length > 0 && (
        <Text className="text-2xl">{users[0].username}</Text>
      )}
    </View>
  );
}
