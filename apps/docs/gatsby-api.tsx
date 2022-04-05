import { ServerSideProvider, ServerSideSheet } from '@booleon/react';

import {
  RenderBodyArgs,
  WrapPageElementBrowserArgs,
  WrapPageElementNodeArgs,
  WrapRootElementBrowserArgs,
  WrapRootElementNodeArgs,
} from 'gatsby';

import { Layout } from './src/containers/Layout';

const sheetByPathname = new Map<string, ServerSideSheet>();

export const wrapRootElement = (
  props: WrapRootElementNodeArgs | WrapRootElementBrowserArgs,
) => {
  const ssrSheet = new ServerSideSheet();
  sheetByPathname.set(props?.pathname as string, ssrSheet);
  return (
    <ServerSideProvider ssrSheet={ssrSheet}>{props.element}</ServerSideProvider>
  );
};

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs | WrapPageElementNodeArgs) => {
  return props.path ? <Layout {...props}>{element}</Layout> : element;
};

export const onRenderBody = ({
  setHeadComponents,
  pathname,
}: RenderBodyArgs) => {
  const ssrSheet = sheetByPathname.get(pathname);
  console.log({ ssrSheet });
  if (ssrSheet) {
    setHeadComponents([ssrSheet.getSheet]);
    sheetByPathname.delete(pathname);
  }
};
