import React from 'react';
import { ReactComponent as Search } from "../../../assets/icons/ic-search.svg";
import { ReactComponent as User } from "../../../assets/icons/ic-user.svg";
import { ReactComponent as Heart } from "../../../assets/icons/ic-heart.svg";
import { ReactComponent as Laptop } from "../../../assets/icons/ic-laptop.svg";
import { ReactComponent as Close } from "../../../assets/icons/ic-close.svg";
import { ReactComponent as Question } from "../../../assets/icons/ic-question-mark.svg";
import { ReactComponent as Home } from "../../../assets/icons/ic-home.svg";
import { ReactComponent as Plus } from "../../../assets/icons/ic-plus.svg";

export const SearchIcon = ({ className, style, width = '2rem', height = '100%' }) => (
  <Search className={className} style={style} width={width} height={height} />
);

export const UserIcon = ({ className, style, width = '2rem', height = '100%' }) => (
  <User className={className} style={style} width={width} height={height} />
);

export const HeartIcon = ({ className, style, width = '2rem', height = '100%' }) => (
  <Heart className={className} style={style} width={width} height={height} />
);

export const LaptopIcon = ({ className, style, width = '3rem', height = '100%' }) => (
  <Laptop className={className} style={style} width={width} height={height} />
);

export const CloseIcon = ({ className, style, width = '1rem', height = '100%' }) => (
  <Close className={className} style={style} width={width} height={height} />
);

export const QuestionIcon = ({ className, style, width = '1.5rem', height = '100%' }) => (
  <Question className={className} style={style} width={width} height={height} />
);

export const HomeIcon = ({ className, style, width = '2rem', height = '100%' }) => (
  <Home className={className} style={style} width={width} height={height} />
);

export const PlusIcon = ({ className, style, width = '2rem', height = '100%' }) => (
  <Plus className={className} style={style} width={width} height={height} />
);