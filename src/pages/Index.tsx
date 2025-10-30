import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0, 0 0'
        }}
      ></div>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="relative z-10 max-w-4xl w-full">
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan-line"></div>
          </div>
          
          <h1 
            className="text-8xl md:text-9xl font-black tracking-wider mb-4 animate-glitch text-primary uppercase relative"
            style={{
              fontFamily: 'Arial Black, sans-serif',
              WebkitTextStroke: '2px hsl(var(--primary))',
              textShadow: '0 0 10px hsl(var(--neon-green)), 0 0 20px hsl(var(--neon-green)), 0 0 40px hsl(var(--neon-green)), 0 0 80px hsl(var(--neon-green))'
            }}
          >
            KREN
          </h1>
          <div className="flex items-center justify-center gap-2 text-accent animate-flicker">
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse-glow"></div>
            <p className="text-xl font-bold uppercase tracking-widest" style={{ textShadow: '0 0 10px hsl(var(--neon-blue))' }}>
              LIVE NOW
            </p>
          </div>
        </div>

        <Card className="bg-card/50 backdrop-blur-lg border-2 border-primary/30 p-8 animate-pulse-glow">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-lg opacity-75 animate-pulse-glow"></div>
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl font-black border-4 border-background">
                <span style={{ textShadow: '0 0 10px rgba(0,0,0,0.5)' }}>K</span>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-2 text-foreground">
                kren
              </h2>
              <p className="text-muted-foreground mb-6 flex items-center justify-center md:justify-start gap-2">
                <Icon name="Twitch" size={20} className="text-secondary" />
                Twitch Streamer
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon name="Users" size={20} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary animate-neon-glow">
                    42.5K
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Followers
                  </div>
                </div>

                <div className="text-center border-x border-border/30">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon name="Eye" size={20} className="text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-secondary" style={{ textShadow: '0 0 10px hsl(var(--neon-pink))' }}>
                    8.2K
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Viewers
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon name="TrendingUp" size={20} className="text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent" style={{ textShadow: '0 0 10px hsl(var(--neon-blue))' }}>
                    1.2M
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Total Views
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/30 flex flex-wrap gap-3 justify-center">
            <div className="px-4 py-2 bg-primary/10 border border-primary/50 rounded-full text-sm font-semibold text-primary uppercase tracking-wide">
              FPS Games
            </div>
            <div className="px-4 py-2 bg-secondary/10 border border-secondary/50 rounded-full text-sm font-semibold text-secondary uppercase tracking-wide">
              Cyberpunk 2077
            </div>
            <div className="px-4 py-2 bg-accent/10 border border-accent/50 rounded-full text-sm font-semibold text-accent uppercase tracking-wide">
              Valorant
            </div>
          </div>
        </Card>

        <div className="mt-8 flex justify-center gap-4">
          <button className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-lg overflow-hidden transition-all hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            <span className="relative flex items-center gap-2">
              <Icon name="Play" size={20} />
              Watch Stream
            </span>
          </button>
          
          <button className="group px-8 py-4 bg-transparent border-2 border-secondary text-secondary font-bold uppercase tracking-wider rounded-lg transition-all hover:scale-105 hover:bg-secondary hover:text-background">
            <span className="flex items-center gap-2">
              <Icon name="Heart" size={20} />
              Follow
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 opacity-20">
        <Icon name="Zap" size={200} className="text-primary animate-pulse" />
      </div>
    </div>
  );
};

export default Index;