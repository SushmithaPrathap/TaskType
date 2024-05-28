import React, { FC, ReactNode } from 'react';

interface IComposeContext {
  components?: FC<{ children?: ReactNode }>[]; //this can have components(FC) these can have futher children which are of type ReactNode
  children?: ReactNode | undefined;
}

export default function ComposeContext(props: IComposeContext) {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, Comp: any) => {
        //reduce right will lopp through the components and nest them as well
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
}
