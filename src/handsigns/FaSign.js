import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const FaSign = new GestureDescription('fa');

// Polegar – Diagonal Down Right
FaSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.5);
FaSign.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 2.0);

for (const finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  FaSign.addCurl(finger, FingerCurl.FullCurl, 1.0);
  FaSign.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
  FaSign.addCurl(finger, FingerCurl.HalfCurl, 0.6);
}
