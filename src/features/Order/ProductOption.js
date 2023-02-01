import { useState } from 'react'
import { TouchableHighlight, StyleSheet } from 'react-native'
import { RadioButton } from 'react-native-paper'
import BaseText from '~/components/base/BaseText'
import baseStyles from '~/styles'

const ProductOption = ({
  data: products,
  selectedProduct,
  setSelectedProduct,
}) => {
  const getProductClass = product => {
    const style = [styles.optionContainer]
    return product.id === selectedProduct
      ? style.concat({
          borderColor: baseStyles.color.primary,
          borderWidth: 1,
        })
      : style
  }

  return (
    <RadioButton.Group
      onValueChange={newValue => setSelectedProduct(newValue)}
      value={selectedProduct}>
      {products.map(product => {
        return (
          <TouchableHighlight
            key={product.id}
            style={getProductClass(product)}
            activeOpacity={0.6}
            underlayColor={baseStyles.color.secondary}
            onPress={() => setSelectedProduct(product.id)}>
            <>
              <RadioButton value={product.id} />
              <BaseText>{product.name}</BaseText>
            </>
          </TouchableHighlight>
        )
      })}
    </RadioButton.Group>
  )
}

const styles = StyleSheet.create({
  optionContainer: [
    {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: baseStyles.radius.sm,
      padding: baseStyles.space.sm,
      marginBottom: baseStyles.space.md,
    },
    baseStyles.shadow.md,
  ],
})

export default ProductOption
