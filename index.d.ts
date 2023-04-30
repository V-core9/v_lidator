export type V_Rifier = (type: string, ...args: any[]) => Promise<boolean>;

export interface Verify extends V_Rifier {
  register: (type: string, fn: () => void) => boolean;
  unregister: (type: string) => boolean;
  listTypes: () => string[];
}
