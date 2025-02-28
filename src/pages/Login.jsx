import { useForm } from "react-hook-form";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form
        action=""
        className="flex flex-col gap-1 max-w-md mx-auto"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <label htmlFor="">Email</label>
        <input
          className="border"
          type="text"

          {...register("email", {
            required: true,
            minLength: 3,
            pattern: {
              value: /noroff\.no$/,
              message: "Email must incluede @student.noroff.no",
            },
          })}

          aria-label="email"
        />

        {errors.email &&
          (errors.email.message ? (
            <p className="text-red-500">{errors.email.message}</p>
          ) : (
            ""
          ))}

        <label htmlFor="">Password</label>
        <input
          className="border"
          type="text"

          {...register("password", {
            required: true,
            minLength: {
                value: 6,
                message: "The password needs to be at least 6 characters",
            },
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])/,
                message: "password must include both lower case and upper case characters",
            },
          })}

          placeholder="password"
          aria-label="password"
        />
        <button
          className="bg-red-400 text-red-950 rounded p-2 hover:bg-red-900 hover:text-white"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
