'use client';
import React from 'react';
import { createButton } from '@gluestack-ui/core/button/creator';
import { Pressable, Text, View, ActivityIndicator } from 'react-native';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { PrimitiveIcon, UIIcon } from '@gluestack-ui/core/icon/creator';

const SCOPE = 'BUTTON';

const UIButton = createButton({
  Root: withStyleContext(Pressable, SCOPE),
  Text,
  Group: View,
  Spinner: ActivityIndicator,
  Icon: UIIcon,
});

cssInterop(PrimitiveIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: 'classNameColor',
      stroke: true,
    },
  },
});

const buttonStyle = tva({
  base: 'group/button rounded-md flex-row items-center justify-center gap-2 data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[focus-visible=true]:ring-indicator-primary data-[disabled=true]:opacity-40',
  variants: {
    action: {
      primary:
        'bg-primary-500 border border-primary-300 data-[hover=true]:bg-primary-600 data-[hover=true]:border-primary-400 data-[active=true]:bg-primary-700 data-[active=true]:border-primary-500',
      secondary:
        'bg-secondary-500 border border-secondary-300 data-[hover=true]:bg-secondary-600 data-[hover=true]:border-secondary-400 data-[active=true]:bg-secondary-700 data-[active=true]:border-secondary-700',
      positive:
        'bg-success-500 border border-success-300 data-[hover=true]:bg-success-600 data-[hover=true]:border-success-400 data-[active=true]:bg-success-700 data-[active=true]:border-success-500',
      negative:
        'bg-error-500 border border-error-300 data-[hover=true]:bg-error-600 data-[hover=true]:border-error-400 data-[active=true]:bg-error-700 data-[active=true]:border-error-500',
    },
    variant: {
      solid: '',
      outline: 'bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent',
      link: 'px-0 border-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent',
    },
    size: {
      xs: 'px-3.5 h-8',
      sm: 'px-4 h-9',
      md: 'px-5 h-10',
      lg: 'px-6 h-11',
      xl: 'px-7 h-12',
    },
  },
  compoundVariants: [
    {
      variant: 'outline',
      action: 'primary',
      class: 'border-primary-300',
    },
    {
      variant: 'outline',
      action: 'secondary',
      class: 'border-secondary-300',
    },
    {
      variant: 'outline',
      action: 'positive',
      class: 'border-success-300',
    },
    {
      variant: 'outline',
      action: 'negative',
      class: 'border-error-300',
    },
  ],
  defaultVariants: {
    action: 'primary',
    variant: 'solid',
    size: 'md',
  },
});

const buttonTextStyle = tva({
  base: 'font-semibold web:select-none',
  parentVariants: {
    variant: {
      solid: 'text-typography-0',
      outline: '',
      link: 'data-[hover=true]:underline data-[active=true]:underline',
    },
    action: {
      primary: '',
      secondary: '',
      positive: '',
      negative: '',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  parentCompoundVariants: [
    { variant: 'outline', action: 'primary', class: 'text-primary-600' },
    { variant: 'outline', action: 'secondary', class: 'text-secondary-600' },
    { variant: 'outline', action: 'positive', class: 'text-success-600' },
    { variant: 'outline', action: 'negative', class: 'text-error-600' },
    { variant: 'link', action: 'primary', class: 'text-primary-600' },
    { variant: 'link', action: 'secondary', class: 'text-secondary-600' },
    { variant: 'link', action: 'positive', class: 'text-success-600' },
    { variant: 'link', action: 'negative', class: 'text-error-600' },
  ],
});

const buttonIconStyle = tva({
  base: 'fill-none',
  parentVariants: {
    size: {
      xs: 'h-3.5 w-3.5',
      sm: 'h-4 w-4',
      md: 'h-[18px] w-[18px]',
      lg: 'h-[18px] w-[18px]',
      xl: 'h-5 w-5',
    },
  },
});

const buttonGroupStyle = tva({
  base: '',
  variants: {
    space: {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-3',
      lg: 'gap-4',
      xl: 'gap-5',
    },
    isAttached: {
      true: 'gap-0',
    },
    flexDirection: {
      row: 'flex-row',
      column: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'column-reverse': 'flex-col-reverse',
    },
  },
});

type IButtonProps = React.ComponentPropsWithoutRef<typeof UIButton> &
  VariantProps<typeof buttonStyle>;

const Button = React.forwardRef<
  React.ComponentRef<typeof UIButton>,
  IButtonProps
>(function Button(
  { className, variant = 'solid', size = 'md', action = 'primary', ...props },
  ref
) {
  return (
    <UIButton
      ref={ref}
      {...props}
      className={buttonStyle({ variant, size, action, class: className })}
      context={{ variant, size, action }}
    />
  );
});

type IButtonTextProps = React.ComponentPropsWithoutRef<typeof UIButton.Text> &
  VariantProps<typeof buttonTextStyle>;

const ButtonText = React.forwardRef<
  React.ComponentRef<typeof UIButton.Text>,
  IButtonTextProps
>(function ButtonText({ className, variant, size, action, ...props }, ref) {
  const {
    variant: parentVariant,
    size: parentSize,
    action: parentAction,
  } = useStyleContext(SCOPE);

  return (
    <UIButton.Text
      ref={ref}
      {...props}
      className={buttonTextStyle({
        parentVariants: {
          variant: parentVariant,
          size: parentSize,
          action: parentAction,
        },
        variant,
        size,
        action,
        class: className,
      })}
    />
  );
});

type IButtonIconProps = React.ComponentPropsWithoutRef<typeof UIButton.Icon> &
  VariantProps<typeof buttonIconStyle> & {
    height?: number;
    width?: number;
  };

const ButtonIcon = React.forwardRef<
  React.ComponentRef<typeof UIButton.Icon>,
  IButtonIconProps
>(function ButtonIcon({ className, size, ...props }, ref) {
  const { size: parentSize } = useStyleContext(SCOPE);

  if (typeof size === 'number') {
    return (
      <UIButton.Icon
        ref={ref}
        {...props}
        className={buttonIconStyle({ class: className })}
        size={size}
      />
    );
  } else if (
    (props.height !== undefined || props.width !== undefined) &&
    size === undefined
  ) {
    return (
      <UIButton.Icon
        ref={ref}
        {...props}
        className={buttonIconStyle({ class: className })}
      />
    );
  }
  return (
    <UIButton.Icon
      ref={ref}
      {...props}
      className={buttonIconStyle({
        parentVariants: { size: parentSize },
        size,
        class: className,
      })}
    />
  );
});

type IButtonSpinnerProps = React.ComponentPropsWithoutRef<
  typeof UIButton.Spinner
>;

const ButtonSpinner = React.forwardRef<
  React.ComponentRef<typeof UIButton.Spinner>,
  IButtonSpinnerProps
>(function ButtonSpinner(props, ref) {
  return <UIButton.Spinner ref={ref} {...props} />;
});

type IButtonGroupProps = React.ComponentPropsWithoutRef<typeof UIButton.Group> &
  VariantProps<typeof buttonGroupStyle>;

const ButtonGroup = React.forwardRef<
  React.ComponentRef<typeof UIButton.Group>,
  IButtonGroupProps
>(function ButtonGroup(
  { className, space = 'md', isAttached = false, flexDirection = 'row', ...props },
  ref
) {
  return (
    <UIButton.Group
      ref={ref}
      {...props}
      className={buttonGroupStyle({
        space,
        isAttached,
        flexDirection,
        class: className,
      })}
    />
  );
});

Button.displayName = 'Button';
ButtonText.displayName = 'ButtonText';
ButtonIcon.displayName = 'ButtonIcon';
ButtonSpinner.displayName = 'ButtonSpinner';
ButtonGroup.displayName = 'ButtonGroup';

export { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup };
