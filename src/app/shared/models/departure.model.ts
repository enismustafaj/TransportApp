import { Stop } from './stop.model';

export interface Departure {
  tripId: string;
  stop: Stop;
  when: string;
  plannedWhen: string;
  delay: number;
  platform: string;
  plannedPlatform: string;
  direction: string;
  provenance: string;
  line: {
    type: string;
    id: string;
    fahrtNr: string;
    name: string;
    public: boolean;
    adminCode: string;
    mode: string;
    product: string;
    operator: {
      type: string;
      id: string;
      name: string;
    };
    symbol?: string;
    nr: boolean;
    metro: boolean;
    express: boolean;
    night: boolean;
  };
  remarks?: any[];
}
