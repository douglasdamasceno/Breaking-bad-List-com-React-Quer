import React from 'react';
import * as Style from "./styles";

export type ICharacter = {
  name: string;
  birthday: string;
  img: string;
  nickname: string;
}

const Card: React.FC<ICharacter> = ({name,img,birthday,nickname}) => {
  return (
    <Style.Container>
      <Style.Img src={img} />
      <Style.Name><span>Nome: </span>{name}</Style.Name>
      <Style.Nickname><span>NickName: </span>{nickname}</Style.Nickname>
      <Style.Birthday><span>✡ </span>{birthday}</Style.Birthday>
    </Style.Container>
  );
}

export default Card;