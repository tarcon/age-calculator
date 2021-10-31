import React from "react";
import { useForm } from "react-hook-form";
import { redirect } from "aleph/web";

type FormValues = {
  yearOfBirth?: number;
};

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm<
    FormValues
  >();
  const onSubmit = async (data: FormValues) => {
    const response = await fetch("/api/age/calculate/" + data.yearOfBirth);
    const responseData = await response.json();
    redirect(`age/${responseData.age}`);
  };

  return (
    <div className="page">
      <h1>Calculate your age</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col">
            <label htmlFor="yearOfBirth">Year of birth</label>
            <input
              {...register("yearOfBirth", {
                validate: (value: string) => {
                  return !!value && value.length === 4 &&
                    !isNaN(parseInt(value));
                },
              })}
              name="yearOfBirth"
              type="text"
              placeholder="1984"
            />
            {errors.yearOfBirth && (
              <p className={"text-error"}>
                Please enter a year of birth (4 digits).
              </p>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="submit"
              value="Calculate"
              className="is-full-width"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
