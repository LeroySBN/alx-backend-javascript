import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const returnObj = [];
  try {
    const promise1 = await signUpUser(firstName, lastName);
    returnObj.push({ status: 'fulfilled', value: promise1 });
  } catch (err) {
    returnObj.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  try {
    const promise2 = await uploadPhoto(fileName);
    returnObj.push({ status: 'fulfilled', value: promise2 });
  } catch (err) {
    returnObj.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  return returnObj;
}
