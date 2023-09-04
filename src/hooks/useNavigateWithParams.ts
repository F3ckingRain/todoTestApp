import { useLocation, useNavigate } from 'react-router-dom';

export const useNavigateWithParams = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (url: string) => {
    navigate(`${url}${location.search}`, { replace: true });
  };
};

export type NavigateType = ReturnType<typeof useNavigateWithParams>;
