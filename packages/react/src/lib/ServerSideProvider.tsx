import React, { createContext, useContext } from 'react';

const ServerSideContext = createContext({
  sheet: [],
  compileSheet: (_id: string, _css: string) => {
    console.log();
  },
});

export class ServerSideSheet {
  public sheet: any[];

  constructor() {
    this.sheet = [];
  }

  compileSheet(id: string, css: string) {
    this.sheet.push(
      <style data-booleon={id} dangerouslySetInnerHTML={{ __html: css }} />,
    );
  }
}

export function ServerSideProvider({
  children,
  sheet,
}: {
  children: any;
  sheet: ServerSideSheet;
}) {
  function compileSheet(id: string, css: string) {
    sheet.compileSheet(id, css);
  }

  return (
    <ServerSideContext.Provider value={{ sheet: sheet.sheet, compileSheet }}>
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
