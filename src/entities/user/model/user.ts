import { reactive } from "vue";
import { defineStore } from "pinia";

import {} from "@/shared/api";
import { userDb } from "@/app/providers/userIndexDB";

interface UserState {
  name: string;
}

enum UserProps {
  Name = "name",
  Age = "age,",
}

export const NAMESPACE = "user";

export const useUser = defineStore(NAMESPACE, () => {
  const user: UserState = reactive({
    name: "",
  });

  const setName = (name: string) => {
    userDb.set(UserProps.Name, name);
  };

  return {
    user,
    setName,
  };
});
