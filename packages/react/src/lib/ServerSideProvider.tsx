import {
  createContext,
  useContext,
  ReactNode,
  ReactElement,
  ReactNodeArray,
} from 'react';

const ServerSideContext = createContext({});

export class ServerSideSheet {
  private sheet: ReactNodeArray;

  constructor() {
    this.sheet = [];
  }

  get getSheet() {
    return this.sheet as unknown as ReactElement<any, any>;
  }

  compileSheet(id: string, css: string) {
    this.sheet.push(
      <style data-booleon={id} dangerouslySetInnerHTML={{ __html: css }} />,
    );
  }
}

export function ServerSideProvider({
  children,
  ssrSheet,
}: {
  children: ReactNode;
  ssrSheet: ServerSideSheet;
}) {
  function compileSheet(id: string, css: string) {
    ssrSheet.compileSheet(id, css);
  }

  return (
    <ServerSideContext.Provider
      value={{ sheet: ssrSheet.getSheet, compileSheet }}>
      {children}
    </ServerSideContext.Provider>
  );
}

export function useServerSide() {
  try {
    return useContext(ServerSideContext);
  } catch (error) {
    return { error: Error('Booleon ServerSideProvider not in scope :(') };
  }
}
