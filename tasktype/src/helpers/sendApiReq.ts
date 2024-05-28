type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

function returnCorrectReq(method: Method, data: unknown): RequestInit {
  if (method === 'GET') {
    return {
      method: method,
      headers: {
        'Content-Type': 'applications/json',
      },
    };
  }
  return {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

//say if I send this req for tasks type T then I expect it to return a promise with  object of a task type T
export async function sendApiRequest<T>(
  url: string,
  method: Method,
  data: unknown = {},
): Promise<T> {
  const response = await fetch(
    url,
    returnCorrectReq(method, data),
    // here the this options object will be different for get and post, put cause the get wont have a body.
    //hence we  will use  a higher order function, which will will taken in method and data and based on the kind of method it withh return corrct options obj
    //this option obj should be a form of init. Js gives an inteface if this type
  );

  console.log('ers', response);

  //   fetch will alaways retrun a promise - if this promise resolves the puput will be saved in response. if treolves response will be a truty value
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return (await response.json()) as Promise<T>; //type hinting ts that is resposne would be returned a promise of type<T>
}
