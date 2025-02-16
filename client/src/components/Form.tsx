import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("HELLO WORLD");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("name")} />
      <input type="email" placeholder="Email" {...register("email")}/>
      <input type="password" placeholder="Password" {...register("password")}/>
      <input type="password" placeholder="Confirm password" />
      <input type="submit" />
    </form>
  );
};
