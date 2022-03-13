import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
    Container,
    Content,
    Description,
    Details,
    Image,
    Line,
    Name,
    Identification
} from './styles';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

export type ProductProps = {
    id: string;
    photo_url: string;
    name: string;
    description: string;
}

type Props = TouchableOpacityProps & {
    data: ProductProps;
}

export function ProductCard({ data, ...rest }: Props) {
    const { COLORS } = useTheme();

    return (
        <Container>
            <Content {...rest}>
                <Image source={{ uri: data.photo_url }} />

                <Details>
                    <Identification>
                        <Name>{data.name}</Name>
                        <Feather name="chevron-left" size={18} color={COLORS.SHAPE} />
                    </Identification>

                    <Description>{data.description}</Description>
                </Details>
            </Content>

            <Line />
        </Container>
    );
}