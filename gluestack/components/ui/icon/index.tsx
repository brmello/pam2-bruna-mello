'use client';
import React from 'react';
import { createIcon } from '@gluestack-ui/core/icon/creator';
import { cssInterop } from 'nativewind';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { PrimitiveIcon, IPrimitiveIcon } from '@gluestack-ui/core/icon/creator';
import * as LucideIcons from 'lucide-react-native';

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

const iconStyle = tva({
  base: 'text-typography-950 fill-none',
  variants: {
    size: {
      '2xs': 'h-3 w-3',
      xs: 'h-3.5 w-3.5',
      sm: 'h-4 w-4',
      md: 'h-[18px] w-[18px]',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6',
    },
  },
});

const UIIcon = createIcon({ Root: PrimitiveIcon });

type IIconProps = IPrimitiveIcon &
  VariantProps<typeof iconStyle> & {
    height?: number;
    width?: number;
  };

const Icon = React.forwardRef<React.ComponentRef<typeof UIIcon>, IIconProps>(
  function Icon({ size = 'md', className, ...props }, ref) {
    if (typeof size === 'number') {
      return (
        <UIIcon
          ref={ref}
          {...props}
          className={iconStyle({ class: className })}
          size={size}
        />
      );
    } else if (
      (props.height !== undefined || props.width !== undefined) &&
      size === undefined
    ) {
      return (
        <UIIcon ref={ref} {...props} className={iconStyle({ class: className })} />
      );
    }
    return (
      <UIIcon
        ref={ref}
        {...props}
        className={iconStyle({ size, class: className })}
      />
    );
  }
);

Icon.displayName = 'Icon';

// Ícones nomeados (sobre lucide-react-native), prontos para usar
// ex: <AlertCircleIcon className="text-error-700" />
const AddIcon = createIcon({ Root: LucideIcons.Plus });
const AlertCircleIcon = createIcon({ Root: LucideIcons.AlertCircle });
const ArrowLeftIcon = createIcon({ Root: LucideIcons.ArrowLeft });
const ArrowRightIcon = createIcon({ Root: LucideIcons.ArrowRight });
const CalendarDaysIcon = createIcon({ Root: LucideIcons.CalendarDays });
const CheckIcon = createIcon({ Root: LucideIcons.Check });
const CheckCircleIcon = createIcon({ Root: LucideIcons.CheckCircle });
const ChevronDownIcon = createIcon({ Root: LucideIcons.ChevronDown });
const ChevronLeftIcon = createIcon({ Root: LucideIcons.ChevronLeft });
const ChevronRightIcon = createIcon({ Root: LucideIcons.ChevronRight });
const ChevronUpIcon = createIcon({ Root: LucideIcons.ChevronUp });
const ClockIcon = createIcon({ Root: LucideIcons.Clock });
const CloseIcon = createIcon({ Root: LucideIcons.X });
const EyeIcon = createIcon({ Root: LucideIcons.Eye });
const EyeOffIcon = createIcon({ Root: LucideIcons.EyeOff });
const FavouriteIcon = createIcon({ Root: LucideIcons.Heart });
const GlobeIcon = createIcon({ Root: LucideIcons.Globe });
const InfoIcon = createIcon({ Root: LucideIcons.Info });
const MailIcon = createIcon({ Root: LucideIcons.Mail });
const MenuIcon = createIcon({ Root: LucideIcons.Menu });
const PlayIcon = createIcon({ Root: LucideIcons.Play });
const SearchIcon = createIcon({ Root: LucideIcons.Search });
const SettingsIcon = createIcon({ Root: LucideIcons.Settings });
const StarIcon = createIcon({ Root: LucideIcons.Star });
const ThreeDotsIcon = createIcon({ Root: LucideIcons.MoreHorizontal });
const TrashIcon = createIcon({ Root: LucideIcons.Trash2 });
const UserIcon = createIcon({ Root: LucideIcons.User });

export {
  UIIcon,
  Icon,
  AddIcon,
  AlertCircleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  CheckIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ClockIcon,
  CloseIcon,
  EyeIcon,
  EyeOffIcon,
  FavouriteIcon,
  GlobeIcon,
  InfoIcon,
  MailIcon,
  MenuIcon,
  PlayIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
  ThreeDotsIcon,
  TrashIcon,
  UserIcon,
};
