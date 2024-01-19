// CookieSettings.jsx

import { ToggleWithIcon } from '@/components/ui/input/switch';
import { ConsentKeys, CookieKeys } from './CookieConsentBanner';
// import Modal from '../modal/SimpleModal';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';


interface CookieSettingsProps {
  consent: Record<ConsentKeys, boolean>;
  onSave: () => void;
  onReset: () => void;
  onConsentChange: (segment: CookieKeys, newValue: boolean) => void;
  children: React.ReactNode;
}

const CookieSettings: React.FC<CookieSettingsProps> = ({ consent, onSave, onReset, onConsentChange, children }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          { children }
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
            </DialogDescription>
          </DialogHeader>
          <div className="">
            {(["marketing", "analytics", "statistics"] as ConsentKeys[]).map(type => (
              <div key={type}>
                <ToggleWithIcon
                  checked={consent[type]}
                  onChange={(value) => onConsentChange(type, value)}
                />
                <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
              </div>
            ))}
          </div>
          <DialogFooter>
            {/* <Button type="submit">Save changes</Button> */}
            <Button onClick={onSave}>Save Preferences</Button>
            <Button onClick={onReset}>Reset Preferences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieSettings;
