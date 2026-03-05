import React from 'react';
import LinkButton from './LinkButton';

const LinkBar = () => {
  return (
    <div className="justify-center gap-2 md:gap-4 flex flex-col md:flex-row p-4 md:p-0">
      <LinkButton textLink={'PROGRAMAÇÃO'} />
      <LinkButton textLink={'CARDÁPIO'} />
      <LinkButton textLink={'CINEMAS'} />
      <LinkButton textLink={'PARCERIAS'} />
      <LinkButton textLink={'LOCALIZAÇÃO'} />
      <LinkButton textLink={'CONTATO'} />
    </div>
  );
};

export default LinkBar;
