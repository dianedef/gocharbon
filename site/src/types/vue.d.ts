import colors from '../components/config/colors.json';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $colors: typeof colors;
    }
} 