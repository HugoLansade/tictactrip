interface AuthProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSubmitLogin: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Auth({
  email,
  setEmail,
  handleSubmitLogin,
}: AuthProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div id="global-container-login">
      <form id="form-login" onSubmit={handleSubmitLogin}>
        <label className="label-login">
          Email :
          <input
            required
            className="input-email"
            type="email"
            onChange={handleChange}
            value={email}
          />
        </label>
        <input className="btn-login" type="submit" value="Login" />
      </form>
    </div>
  );
}
