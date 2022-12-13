export interface UserState {
  name: string;
  address: string;
}

export type Pool = {
  protocol: string;
  iconName: string;
  poolCode: string;
  balance: string;
  status: number;
};

export type Balance = {
  data: Pool[];
  error: object;
  status: string;
};

export interface BalanceState {
  balance: Balance;
  currentRiskStatus: number;
}

export interface ActiveMenuLink {
  active: boolean | undefined;
}

export type MenuLinkProps = {
  title: string;
  active?: boolean;
  iconName: string;
};

export interface ColorProps {
  color: string;
  textColor: string;
}

export type NavProps = {
  title: string;
};
