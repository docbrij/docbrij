import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

function Header({ config }) {
  const { author, description, social, topnav } = config;

  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <H1><Link to="/">{author}</Link></H1>
        <P>{description}</P>
        {social &&
          <Social
            website={social.website}
            github={social.github}
            twitter={social.twitter}
            linkedin={social.linkedin}
          />
        }
        {topnav &&
          <p><Link style={{marginRight: '50px'}} to={topnav.link1.linkto}>{topnav.link1.label}</Link><Link style={{marginRight: '50px'}} to={topnav.link2.linkto}>{topnav.link2.label}</Link>&nbsp;&nbsp;<Link style={{marginRight: '50px'}} to={topnav.link3.linkto}>{topnav.link3.label}</Link></p>
        }

      </Wrapper>
    </Container>
  );
}

export default Header;
