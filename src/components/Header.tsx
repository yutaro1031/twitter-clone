import React from 'react';
import styled from 'styled-components';

interface Props {}
interface State {}

class Header extends React.Component<Props, State> {
  render() {
    return (
      <HeaderWrapper>
        <div>
          <Image src="https://www.homepage-tukurikata.com/image/lion.jpg" alt="ライオンの画像" />
        </div>
        <div>
          <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAYFBMVEX///8dofIAnfIAmvEUn/L6/f8AmPH1+/7o9P3y+f7s9v7k8/3R6fyWzfhFrfTU6/xquvWDxffF4/u43fpRsfSe0fhet/Ws2Pk2qfN7wfaMyfcppvPc7/2s1fkAkfDK5vuzYlLcAAADiElEQVR4nO2a67ayKhSGBabnJFJTTFvd/11+aIdViUJge+0f8xmj/mT4Mk9M0CBAEARBEARBEARBEAT5Jc2SLA3/7v77QvCe9LI5lH+iIjzLiAIBUB8a9afk5ddq930FVU/JE0BpET/UlbxPXQcuj3bXhQdlgDdYnU+/ZW1NmeU4GhpWWSkQ7F2AgvZ5kJ8FYUCksxGGCKC0UFBTjQLlDWUKNlonurgqCAo1tIWGTq/gKmJ0yclZQdCMQ4BpCqXOC88OEeNVYeaiIJPXqazHQ9yvK2CjgrDiTs4YbtZkxdpVx1UjQN+m+3NDf1oXBcHunmisW47omM/S8QVZS2BwdcbnXB7zo3xY1LkYizczjApp7Vix97/zW3bGySDhOoN44d8mBvJkY8b1Zb5e98OkoHauTLeMuBuCdInmIkM+jAoaj3WzeZ0hJadZcqfEZAV2cBegyTdGu7e4zEwSqFs2PsafpTwArdv8Ewl2C90yQjM+MCKq/O7e0BQLzM8KwaCtfKBqDT+0+0mGoTJ5S1jJemDRD5PiwE1WsFjtV4kNaQ/GwsTce4UbQ28uPatEufkmy+zO6isnFhV4TYJzZRwpf8jpkmTCRwEQry2FWgQp9NwU8+sSuI8C5QMYp+EVDNB5SYhNCWcBPXtJCA5+kThJ8CwLO0NvbAE4Nc5PeEXipEB6KnjqHh2hq823FcIzGsB/U5951mfuVRuvXLwkUK+m7c5+fnJgD1vcfnzEwJ3jAVx3MO9knashvDumXwZxPar41Aiw0f2nvVjYOlQp6n7C9ErFRSfq2rxrmuF+zPZGCiOfCyAex2zv2OydNYB03U7PyaRTQvhuo16oXBYrcDxXWaBz0ODXOc/5fMGkW7phQnPGvK7Ar2vVcv4oL+kWi/SMRDB7b4DXLm6Z4SQjRm100O89AEmHqtCderyZYPtQfGFvXq42XKI1xAdjhYDomzaIW/NGH4j3kcaKgGrh4cszVH5PQV5Ii8aJ1boD2g3ILoWMLJIRqMcTIA1Du9vtd5e26Lga26I0Aqs3LgdhSSKmULXIqjQDOW7XojxoifUiTVn3pZrccpvmHRjpfI8RlglLQdYDASjlxZfy4M5w5EvhCOr+pCu/EAMz8raTY2TC9HLA9H6AujmL+ub4H7wU8CAujyfRcDluaSSvRXeskr94USJMsyxJsj99VwRBEARBEARBEARBkP8b/wD49ibC2i9fiwAAAABJRU5ErkJggg==" />
        </div>
        <div>
          <Image src="https://cdn.emojidex.com/emoji/seal/%E5%B0%8F%E8%8F%B1%E5%BD%A2%28%E9%9D%92%29.png?1417134819" />
        </div>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.header`
  display: fixed;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.29);
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  padding: 5px;
  border-radius: 50%;
`;

export default Header;
