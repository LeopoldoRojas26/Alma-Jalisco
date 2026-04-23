import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, Users, Clock } from "lucide-react";

export default function ReservationModal({ 
  open, 
  onOpenChange 
}: { 
  open: boolean; 
  onOpenChange: (open: boolean) => void;
}) {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false);
    toast({
      title: "Reserva confirmada",
      description: "Hemos recibido su solicitud. Le esperamos en Alma Jalisco.",
      variant: "default",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] rounded-none border-primary/20 p-0 overflow-hidden">
        <div className="bg-primary p-6 text-white text-center">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-normal text-center">Reservar Mesa</DialogTitle>
            <DialogDescription className="text-white/70 text-center font-sans mt-2">
              Asegure su lugar con vistas a la catedral.
            </DialogDescription>
          </DialogHeader>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-primary font-serif italic text-base">Fecha</Label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="date" type="date" required className="pl-9 rounded-none border-border focus-visible:ring-secondary" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="time" className="text-primary font-serif italic text-base">Hora</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="time" type="time" required className="pl-9 rounded-none border-border focus-visible:ring-secondary" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests" className="text-primary font-serif italic text-base">Personas</Label>
            <div className="relative">
              <Users className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <select id="guests" required className="flex h-10 w-full rounded-none border border-border bg-background pl-9 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="1">1 Persona</option>
                <option value="2">2 Personas</option>
                <option value="3">3 Personas</option>
                <option value="4">4 Personas</option>
                <option value="5">5 Personas</option>
                <option value="6">6 Personas</option>
                <option value="7">7+ Personas</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-primary font-serif italic text-base">Nombre Completo</Label>
              <Input id="name" required placeholder="Juan Pérez" className="rounded-none border-border focus-visible:ring-secondary" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary font-serif italic text-base">Correo Electrónico</Label>
              <Input id="email" type="email" required placeholder="juan@ejemplo.com" className="rounded-none border-border focus-visible:ring-secondary" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-primary font-serif italic text-base">Teléfono</Label>
              <Input id="phone" type="tel" required placeholder="33 1234 5678" className="rounded-none border-border focus-visible:ring-secondary" />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-none py-6 font-serif tracking-widest">
              CONFIRMAR RESERVA
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}