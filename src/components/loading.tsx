interface LoadingProps {
  message: string;
}

export const Loading = ({ message }: LoadingProps) => <p>{message}</p>;
