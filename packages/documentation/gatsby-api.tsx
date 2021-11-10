import { ServerSideProvider, ServerSideSheet } from '@booleon/react';

import {
  WrapRootElementNodeArgs,
  WrapRootElementBrowserArgs,
  WrapPageElementBrowserArgs,
  WrapPageElementNodeArgs,
  RenderBodyArgs,
} from 'gatsby';

import { App } from './src/containers/App';
import { Layout } from './src/containers/Layout';

const sheetByPathname = new Map<string, ServerSideSheet>();

export const wrapRootElement = (
  props: WrapRootElementNodeArgs | WrapRootElementBrowserArgs,
) => {
  const ssrSheet = new ServerSideSheet();
  sheetByPathname.set(props?.pathname as string, ssrSheet);
  return (
    <ServerSideProvider ssrSheet={ssrSheet}>
      <App {...props}>{props.element}</App>
    </ServerSideProvider>
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
  if (ssrSheet) {
    setHeadComponents([ssrSheet.getSheet]);
    sheetByPathname.delete(pathname);
  }
};
