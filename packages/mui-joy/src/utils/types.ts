import { SxProps } from '../styles/types';

type SlotCommonProps = {
  component?: React.ElementType;
  sx?: SxProps;
};

export type SlotProps<TSlotComponent extends React.ElementType, TOverrides, TOwnerState> =
  | (React.ComponentPropsWithRef<TSlotComponent> &
      TOverrides &
      SlotCommonProps &
      Record<string, unknown>)
  | ((
      ownerState: TOwnerState,
    ) => Record<string, unknown> &
      React.ComponentPropsWithRef<TSlotComponent> &
      TOverrides &
      SlotCommonProps &
      Record<string, unknown>);

/**
 * Use T to make sure that K contains all of the keys of T
 *
 * @example CreateSlotsAndSlotProps<'root' | 'decorator', { root: ..., decorator: ... }>
 */
export type CreateSlotsAndSlotProps<T extends string, K extends Record<T, any>> = {
  slots?: {
    [P in keyof K]?: React.ElementType;
  };
  slotProps?: {
    [P in keyof K]?: K[P];
  };
};
