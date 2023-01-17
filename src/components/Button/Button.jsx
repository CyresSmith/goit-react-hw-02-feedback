import { StyledButton, ButtonText } from './Button.styled';

const Button = ({
  icon: Icon = null,
  type = 'button',
  disabled = false,
  children,
  iconSize,
}) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {Icon && <Icon size={iconSize} />}
      <ButtonText isIconThere={Icon}>{children}</ButtonText>
    </StyledButton>
  );
};

export default Button;
