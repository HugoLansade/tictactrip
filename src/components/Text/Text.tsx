import ButtonMain from "../Buttons/ButtonMain";

interface TextProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleSubmitText: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Text({ handleSubmitText, text, setText }: TextProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <form id="form" onSubmit={handleSubmitText} encType="text/plain">
      <textarea
        id="story"
        name="story"
        value={text}
        onChange={handleChange}
        className="text-area"
        placeholder="Write / copy your text here ..."
      />
      <ButtonMain />
    </form>
  );
}
