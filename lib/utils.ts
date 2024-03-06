export const errorMessage = (e: unknown): string => {
  let message: string;
  if (e instanceof Error) {
    message = e.message;
  } else if (e && e instanceof Object && "message" in e) {
    message = String(e.message);
  } else if (
    e &&
    e instanceof Object &&
    "message" in e &&
    typeof e.message === "string"
  ) {
    return e.message;
  } else {
    message = "An error occurred";
  }
  return message;
};
export const validateString = (val: unknown, maxLength: number) => {
  if (!val || typeof val !== "string" || val.length > maxLength) {
    return false;
  }
  return true;
};
