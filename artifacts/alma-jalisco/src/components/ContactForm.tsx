import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail } from 'lucide-react';

export default function ContactForm() {
  const { toast } = useToast();
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast({
        title: '¡Mensaje enviado!',
        description: `Gracias ${form.nombre}, te responderemos pronto a ${form.email}.`,
      });
      setForm({ nombre: '', email: '', asunto: '', mensaje: '' });
      setSending(false);
    }, 600);
  };

  return (
    <section id="contacto" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Escríbenos</p>
          <h2 className="text-5xl md:text-6xl font-serif text-primary mb-4">Contáctanos</h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            ¿Tienes alguna duda, sugerencia o deseas organizar un evento privado? Déjanos un mensaje y nuestro equipo te atenderá personalmente.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl mx-auto bg-background rounded-2xl shadow-lg border border-border p-8 md:p-12 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nombre" className="text-primary font-light tracking-wide">Nombre completo</Label>
              <Input
                id="nombre"
                name="nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="bg-secondary/40 border-border focus-visible:ring-accent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary font-light tracking-wide">Correo electrónico</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
                className="bg-secondary/40 border-border focus-visible:ring-accent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="asunto" className="text-primary font-light tracking-wide">Asunto</Label>
            <Input
              id="asunto"
              name="asunto"
              required
              value={form.asunto}
              onChange={handleChange}
              placeholder="¿De qué quieres hablarnos?"
              className="bg-secondary/40 border-border focus-visible:ring-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensaje" className="text-primary font-light tracking-wide">Mensaje</Label>
            <Textarea
              id="mensaje"
              name="mensaje"
              required
              rows={5}
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos los detalles..."
              className="bg-secondary/40 border-border focus-visible:ring-accent resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-xs text-muted-foreground font-light flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              También puedes escribirnos a contacto@almajalisco.mx
            </p>
            <Button
              type="submit"
              disabled={sending}
              className="bg-primary hover:bg-primary/90 text-primary-foreground tracking-widest text-xs uppercase px-8 py-6"
            >
              {sending ? 'Enviando...' : (
                <>
                  Enviar mensaje
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
