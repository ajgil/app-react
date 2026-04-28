import React from "react";
import { Card, CardContent } from "./Card";
import { Select } from "./Select";
import { Button } from "./Button";

export interface JobFilterCardProps {
  onApply?: (filters: any) => void;
  onClear?: () => void;
  className?: string;
}

export const JobFilterCard: React.FC<JobFilterCardProps> = ({
  onApply,
  onClear,
  className = "",
}) => {
  const [filters, setFilters] = React.useState({
    position: "all",
    location: "all",
    duration: "all",
    vesselSize: "all",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFilters((prev) => ({ ...prev, [id]: value }));
  };

  const positionOptions = [
    { label: "All Positions", value: "all" },
    { label: "Deckhand", value: "deckhand" },
    { label: "Bosun", value: "bosun" },
    { label: "Chief Stewardess", value: "stewardess" },
  ];

  const locationOptions = [
    { label: "All Locations", value: "all" },
    { label: "Monaco", value: "monaco" },
    { label: "Palma", value: "palma" },
    { label: "Antibes", value: "antibes" },
  ];

  const durationOptions = [
    { label: "All Durations", value: "all" },
    { label: "Permanent", value: "permanent" },
    { label: "Seasonal", value: "seasonal" },
    { label: "Temp", value: "temp" },
  ];

  const vesselSizeOptions = [
    { label: "All Sizes", value: "all" },
    { label: "30-50m", value: "30-50m" },
    { label: "50-80m", value: "50-80m" },
    { label: "80m+", value: "80m+" },
  ];

  return (
    <Card className={`w-full shadow-sm border-border-100 ${className}`}>
      <CardContent className="p-6 flex flex-col gap-6">
        <div className="grid grid-cols-4 gap-4 mq1050:grid-cols-2 mq450:grid-cols-1">
          <Select
            id="position"
            label="Position"
            options={positionOptions}
            value={filters.position}
            onChange={handleChange}
          />
          <Select
            id="location"
            label="Location"
            options={locationOptions}
            value={filters.location}
            onChange={handleChange}
          />
          <Select
            id="duration"
            label="Duration"
            options={durationOptions}
            value={filters.duration}
            onChange={handleChange}
          />
          <Select
            id="vesselSize"
            label="Vessel Size"
            options={vesselSizeOptions}
            value={filters.vesselSize}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-end items-center gap-3 mt-2">
          <Button 
            variant="outline" 
            onClick={() => {
              setFilters({
                position: "all",
                location: "all",
                duration: "all",
                vesselSize: "all",
              });
              onClear?.();
            }}
          >
            Clear All
          </Button>
          <Button 
            variant="primary" 
            onClick={() => onApply?.(filters)}
          >
            Apply Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobFilterCard;
