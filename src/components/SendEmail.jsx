import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";

const useSubmitForm = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: submitForm, isPending: isSubmittingForm } = useMutation({
    mutationFn: async (formData) => {
      try {
        const res = await axios.post("http://localhost:3000/send-email", formData);
        if (res.status !== 200) {
          throw new Error(res.data.error || "Something went wrong");
        }
        return res.data;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      toast.success("Your details have been submitted successfully!");
      Promise.all([
        queryClient.invalidateQueries({ queryKey: ["userData"] }),
      ]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { submitForm, isSubmittingForm };
};

export default useSubmitForm;
