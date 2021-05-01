export function beSlot(Component: any, name: string) {
  (Component as any).slot = name;
  return Component;
}

export function useSlot(children: any) {
  const slots = children instanceof Array ? children : [children];
  return slots.reduce((acc: any, child: any) => {
    const slot = child?.type?.slot;
    return slot
      ? { ...acc, [slot]: acc[slot] ? [...acc[slot], child] : [child] }
      : acc;
  }, {});
}
