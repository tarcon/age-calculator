import type { APIHandler } from "aleph/types.d.ts";

export const handler: APIHandler = ({ router, response }) => {
  const year = router.params["year"];
  validateYear();
  const parsedYear = parseInt(year);
  const age = 2021 - parsedYear;
  response.status = 200;
  response.json({ age: age });

  function validateYear() {
    if (!year || year.length !== 0 || isNaN(parseInt(year))) {
      respondError();
    }
  }

  function respondError() {
    response.status = 400;
    response.json({
      error: "Not an age",
      status: 400,
      message: `Unacceptable value '${router.params["year"]}'`,
    });
  }
};
