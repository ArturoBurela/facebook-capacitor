export interface FacebookCapacitorPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
