export default interface ISignView extends React.PropsWithChildren {
  isSignUp?: boolean;
  handleSubmit: () => void;
}