import { Doctor, Patient } from "~/types/users";

export default defineStore("userStore", () => {
  const user = ref<Doctor | Patient | null>(null);

  async function registerPatient(newPatient: Patient) {
    const { data, error } = await useRegisterPatient(newPatient);
    return { data, error };
  }

  return { user, registerPatient };
});
