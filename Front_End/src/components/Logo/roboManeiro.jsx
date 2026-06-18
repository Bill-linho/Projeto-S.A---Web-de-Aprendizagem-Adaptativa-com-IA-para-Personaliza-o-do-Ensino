import logo from '../../assets/Robô maneiro sem fundo.png'

export default function LogoRobo({ height = '95px', width = 'auto', padding = '0px'}) {
  return (
    <img
      src={logo}
      alt="logo"
      style={{
        height,
        width,
        padding
      }}
    />
  );
}