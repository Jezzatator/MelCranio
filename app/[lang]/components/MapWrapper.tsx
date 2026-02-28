// app/[lang]/components/MapWrapper.tsx
'use client';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false, 
  loading: () => (
    <div className="w-full mt-4 rounded-lg overflow-hidden bg-gray-200 animate-pulse" style={{ height: '250px' }} />
  ),
});

interface MapWrapperProps {
  latitude: number;
  longitude: number;
  title: string;
  description: string;
  height?: string;
}

export default function MapWrapper(props: MapWrapperProps) {
  return <MapComponent {...props} />;
}
