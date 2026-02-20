import React from 'react';
import LinkButton from './LinkButton';

const LinkBar = () => {
  return (
    <div className="justify-center gap-4 flex-wrap flex">
      <LinkButton textLink={'PROGRAMAÇÃO'} path="filme" />
      <LinkButton textLink={'CARDÁPIO'} />
      <LinkButton textLink={'CINEMAS'} />
      <LinkButton textLink={'PARCERIAS'} />
      <LinkButton textLink={'LOCALIZAÇÃO'} />
      <LinkButton textLink={'CONTATO'} />
    </div>
  );
};

export default LinkBar;
