```
  const CVAComponent: <E extends keyof ReactHTML, V extends Variant<V>>
  (element: E, cvaObject: CVA<V>, displayName?: string) => {
    ({ children, className, variants, ...props }: {
        variants?: VariantProps<(props?: (ConfigVariants<{
            [k: string]: {
                [k: string]: string;
            };
        }> & ClassProp) | undefined) => string> | undefined;
    } & ComponentProps<...>): DetailedReactHTMLElement<...>;
    displayName: string | undefined;
  }
```

{
  variants: {
    colors: {
      blue: string
      red: string
    }
  }  
}

variants: {
  colors: {
    'blue' | 'red'
  }
}