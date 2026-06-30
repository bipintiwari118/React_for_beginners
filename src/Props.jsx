function User({ user, address,color }) {
  return (
    <div style={{ color:"yellow" }}>
      <h1>User Details:</h1>
      <h2>Username:{user.name} </h2>
      <h2>Age:{user.age}</h2>
      <h2>Email:{user.email}</h2>
      <h2>Permanent Address:{address.permanent}</h2>
      <h2>Temporary Address:{address.temporary}</h2>
      <h2>Color List:{color[0],color[1]}</h2>
    </div>
  );
}

export default User;
