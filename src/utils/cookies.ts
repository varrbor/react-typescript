const getAuthData = () => {
  const jwtTokenCookie: RegExpMatchArray | null = document.cookie.match(
    `(^|; )jwtToken=([^;]*)`
  );
  const userIdCookie: RegExpMatchArray | null = document.cookie.match(
    `(^|; )userId=([^;]*)`
  );

  if (jwtTokenCookie) {
    const token: string = jwtTokenCookie[2];
    const userId: string = userIdCookie![2];

    return {
      token,
      userId,
    };
  }
  return {
    token: null,
    userId: null,
  };
};

export default getAuthData;
